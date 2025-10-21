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
    <AnimatedSection id="portfolio" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Portfólio</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Uma seleção de trabalhos que demonstram minha paixão por contar histórias através de imagens.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden bg-secondary border-border/50 group">
              <div className="aspect-video overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
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
