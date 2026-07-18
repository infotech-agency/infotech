type HtmlContentProps = {
  html: string;
  className?: string;
};

export default function HtmlContent({
  html,
  className = "",
}: HtmlContentProps) {
  return (
    <div
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}