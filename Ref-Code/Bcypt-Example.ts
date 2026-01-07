import bcrypt from 'bcrypt';
import fs from 'fs/promises';
import path from 'path';

interface Member {
  id: number;
  username: string;
  email: string;
  hashedPassword: string;
  createdAt: string;
}

interface Database {
  members: Member[];
}

const dbPath = path.join(process.cwd(), '_env', 'placeholder.json');

/**
 * 從 JSON 文件讀取資料庫
 */
async function readDatabase(): Promise<Database> {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('讀取資料庫失敗:', error);
    return { members: [] };
  }
}

/**
 * 寫入資料庫
 */
async function writeDatabase(db: Database): Promise<void> {
  try {
    await fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf-8');
    console.log('✅ 資料庫已更新');
  } catch (error) {
    console.error('寫入資料庫失敗:', error);
  }
}

/**
 * 雜湊密碼（註冊時使用）
 */
async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // 計算難度，越高越安全但越慢
  return bcrypt.hash(password, saltRounds);
}

/**
 * 驗證密碼（登入時使用）
 */
async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * 註冊新用戶
 */
async function registerMember(
  username: string,
  email: string,
  password: string
): Promise<Member | null> {
  const db = await readDatabase();

  // 檢查用戶是否已存在
  if (db.members.some((m) => m.username === username || m.email === email)) {
    console.log('❌ 用戶已存在');
    return null;
  }

  // 雜湊密碼
  const hashedPassword = await hashPassword(password);

  // 建立新成員
  const newMember: Member = {
    id: (db.members[db.members.length - 1]?.id ?? 0) + 1,
    username,
    email,
    hashedPassword,
    createdAt: new Date().toISOString().split('T')[0],
  };

  // 加入資料庫
  db.members.push(newMember);
  await writeDatabase(db);

  console.log(`✅ 用戶 "${username}" 註冊成功`);
  return newMember;
}

/**
 * 用戶登入驗證
 */
async function loginMember(
  username: string,
  password: string
): Promise<Member | null> {
  const db = await readDatabase();

  // 尋找用戶
  const member = db.members.find((m) => m.username === username);
  if (!member) {
    console.log('❌ 用戶不存在');
    return null;
  }

  // 驗證密碼
  const isValid = await verifyPassword(password, member.hashedPassword);
  if (!isValid) {
    console.log('❌ 密碼錯誤');
    return null;
  }

  console.log(`✅ 用戶 "${username}" 登入成功`);
  return member;
}

/**
 * 顯示所有用戶（不包含密碼）
 */
async function displayAllMembers(): Promise<void> {
  const db = await readDatabase();
  console.log('\n📋 所有用戶:');
  console.table(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    db.members.map(({ hashedPassword, ...rest }) => rest)
  );
}

/**
 * 主程式：演示使用
 */
async function main() {
  console.log('🔐 Bcrypt 簡單範例\n');

  // 1. 註冊新用戶
  console.log('--- 1️⃣  註冊階段 ---');
  await registerMember('alice', 'alice@example.com', 'password123');
  await registerMember('bob', 'bob@example.com', 'securePass456');
  await registerMember('alice', 'alice2@example.com', 'duplicate'); // 重複用戶
  await registerMember('angelo', 'angelo@hotmail.com', 'Egbf7983');

  // 2. 顯示所有用戶
  await displayAllMembers();

  // 3. 登入測試
  console.log('\n--- 2️⃣  登入階段 ---');
  await loginMember('alice', 'password123'); // ✅ 正確密碼
  await loginMember('alice', 'wrongPassword'); // ❌ 錯誤密碼
  await loginMember('bob', 'securePass456'); // ✅ 正確密碼
  await loginMember('charlie', 'anyPassword'); // ❌ 用戶不存在
  await loginMember('angelo', 'Egbf7983');

  // 4. 密碼比較演示
  console.log('\n--- 3️⃣  密碼雜湊演示 ---');
  const plainPassword = 'MySecret123!';
  const hashed1 = await hashPassword(plainPassword);
  const hashed2 = await hashPassword(plainPassword);

  console.log(`原始密碼: ${plainPassword}`);
  console.log(`雜湊1: ${hashed1}`);
  console.log(`雜湊2: ${hashed2}`);
  console.log(`兩個雜湊相同? ${hashed1 === hashed2}`); // false (每次都不同)
  console.log(`驗證雜湊1: ${await verifyPassword(plainPassword, hashed1)}`); // true
  console.log(`驗證雜湊2: ${await verifyPassword(plainPassword, hashed2)}`); // true
}

// 執行主程式
main().catch(console.error);
