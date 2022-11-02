import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

import Button from "./components/Button";

export default function App() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      <div className="flex gap-x-2">
        <Button type="button" onClick={() => alert("Login with Facebook")}>
          <IconBrandFacebook />
          Login
        </Button>

        <Button
          type="button"
          onClick={() => alert("Login with Twitter")}
          className="bg-sky-600"
        >
          <IconBrandTwitter />
          Login
        </Button>

        <Button
          type="button"
          onClick={() => alert("Login with Facebook")}
          className="bg-black"
        >
          <IconBrandGithub />
          Login 5
        </Button>
      </div>
    </div>
  );
}
