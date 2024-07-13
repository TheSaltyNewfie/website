import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";
import { Chip } from "@nextui-org/chip";

type ProjectCardProps = {
    title: any;
    description: any;
    link: any;
    isLive: any;
    liveLink: any;
    tags: string[];
};

export default function ProjectCard({ title, description, link, isLive, liveLink, tags }: ProjectCardProps) {

    let navigate = useNavigate()

    return (
        <Card className="w-80 h-80">
            <CardHeader className="flex flex-col">
                <h1 className="text-2xl mb-2">{title}</h1>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Chip key={tag} color="primary">{tag}</Chip>
                    ))}
                </div>
            </CardHeader>
            <Divider />
            <CardBody>{description}</CardBody>

            <CardFooter className="gap-4">
                <Button href={link} color="primary" size="md" onClick={() => window.open(link, "_blank")}>
                    View Project
                </Button>

                {isLive ? (
                    <Button href={liveLink} color="success" size="md" onClick={() => window.open(liveLink, "_blank")}>
                        Live Site
                    </Button>
                ) : (
                    <p>No Live Site</p>
                )}
            </CardFooter>
        </Card>
    );
};

