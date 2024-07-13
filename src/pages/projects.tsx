import { title } from "@/components/primitives"
import DefaultLayout from "@/layouts/default"
import ProjectCard from "@/components/projectCard"

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Projects</h1>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-4">
          <ProjectCard
            title="Communication App"
            description="Great name right? This is a basic messaging app using Typescript, NextUI and Python, Flask, and SocketIO for the backend."
            link="https://github.com/thesaltynewfie/communication-app"
            isLive={true}
            liveLink="https://site.thesaltynewfie.ca"
            tags={["Typescript", "NextUI", "Python", "Flask", "SocketIO"]}
          />
          <ProjectCard
            title="Web Password Manager"
            description="This was built for my second project at GA, just a simple pure html and js and a mongodb+express backend. Not super secure"
            link="https://github.com/TheSaltyNewfie/Web-Password-Manager"
            isLive={false}
            liveLink=""
            tags={["NextJS", "Typescript", "Python", "Flask", "SocketIO"]}
          />
          <ProjectCard
            title="KV-RAT-CPP"
            description="A long-standing research project, originally in Python and rewritten in C++. It's a RAT for remote computer control but with features to only mess with the client as a joke."
            link="https://github.com/TheSaltyNewfie/KV-RAT-CPP"
            isLive={false}
            liveLink=""
            tags={["NextJS", "Typescript", "Python", "Flask", "SocketIO"]}
          />
        </div>
        <div className="inline-block max-w-lg text-center justify-center mt-8">
          <h2 className="text-2xl font-bold">More projects coming soon...</h2>
        </div>
      </section>
    </DefaultLayout>
  )
}