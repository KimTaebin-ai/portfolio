import { Section } from "@/components/section";
import { current } from "@/lib/data";

export function Current() {
  return (
    <Section id="current" title="Current">
      <div className="space-y-10">
        {current.map((item) => (
          <div key={item.org}>
            <h3 className="text-lg font-semibold md:text-xl">{item.org}</h3>
            <p className="mt-1 text-xs font-medium text-foreground-muted md:text-sm">{item.period}</p>
            <div className="mt-3 space-y-1 text-sm text-foreground-muted md:text-base">
              {item.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
