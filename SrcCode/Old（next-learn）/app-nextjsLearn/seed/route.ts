import bcrypt from 'bcrypt';
// import postgres from 'postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

console.log('Seeding data...');

export async function GET() {
  try {
    // const result = await sql.begin((sql) => [
    //   seedUsers(),
    //   seedCustomers(),
    //   seedInvoices(),
    //   seedRevenue(),
    // ]);
    // console.log('Seeding data completed successfully.');
    // console.log(invoices, customers, revenue, users);

    return (
      // Response.json({ message: '資料庫匯入成功' })
      Response.json(invoices)
    );
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
