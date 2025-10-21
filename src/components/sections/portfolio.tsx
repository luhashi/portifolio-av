import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioVideos } from "@/lib/data";
import { AnimatedSection } from "../animated-section";

export function Portfolio() {
  return (
    <AnimatedSection id="portfolio" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">Portfólio</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Uma seleção de trabalhos que demonstram minha paixão por contar histórias através de imagens.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden bg-card border-border/50">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{video.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
