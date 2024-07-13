import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex justify-center">
            <Avatar src="https://avatars.githubusercontent.com/u/46291294?v=4" className="w-60 h-60" />
          </div>
          <h1 className={title()}>Hey, my name is Tobias Dodge</h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            I am a passionate Software Developer from Newfoundland and Labrador, Canada.
          </h4>
        </div>

        <div className="flex gap-4">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <div>
          <Card>
            <CardBody>
              <h4 className="text-center mt-2 text-lg leading-snug max-w-2xl">
                I am pretty well versed in C++, Python, and TypeScript/Javascript. I have a true passion for building software that is both useful and enjoyable to use.
                <br />
                <br />
                Perhaps you should check out my <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/projects")}>projects</span>!
              </h4>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
