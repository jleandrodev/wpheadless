import { ElementType } from "react";

interface ServiceCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex items-center gap-4 group bg-card rounded-md p-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
      <div className="bg-primary rounded-md p-3 flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary">
        <Icon className="w-6 h-6 text-primary-foreground group-hover:text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground group-hover:text-primary-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
