import { StyleProvider } from "@ant-design/cssinjs";
import type { V2_MetaFunction } from "@remix-run/node";
import { Button } from "antd";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <Button>登录</Button>
  );
}
