import Container from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
