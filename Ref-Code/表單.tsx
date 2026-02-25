import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>聯絡我們</CardTitle>
            <CardDescription>
              有任何問題或合作需求，請填寫下方表單，我們會盡快回覆你。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="contact-form" className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" name="name" placeholder="王小明" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">主旨</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="請輸入訊息主旨"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">訊息內容</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="請輸入你的需求或問題"
                  rows={6}
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-end">
            <Button type="submit" form="contact-form">
              送出表單
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
