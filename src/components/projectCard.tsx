import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

type ProjectCardProps = {
    title: any;
    description: any;
    link: any;
    isLive: any;
    liveLink: any;
};

export default function ProjectCard({ title, description, link, isLive, liveLink }: ProjectCardProps) {

    let navigate = useNavigate()

    return (
        <Card className="w-80 h-80">
            <CardHeader><h1 className="text-2xl">{title}</h1></CardHeader>
            <Divider />
            <CardBody>{description}</CardBody>

            <CardFooter className="gap-4">
                <Button href={link} color="primary" size="md" onClick={() => window.location.href = link}>
                    View Project
                </Button>

                {isLive ? (
                    <Button href={liveLink} color="success" size="md" onClick={() => window.location.href = liveLink}>
                        Live Site
                    </Button>
                ) : (
                    <p>No Live Site</p>
                )}
            </CardFooter>
        </Card>
    );
};

