import { ArrowRightIcon } from "@/components/site/icons";

type FlowStep = {
  label: string;
  title: string;
  caption: string;
};

type WimFlowDiagramProps = {
  steps: FlowStep[];
};

export function WimFlowDiagram({ steps }: WimFlowDiagramProps) {
  return (
    <div className="wim-flow-shell grain-surface" aria-label="Bill by WIM flow">
      <div className="wim-flow-track">
        {steps.map((step, index) => (
          <div key={step.label} className={`wim-flow-step wim-flow-step-${index}`}>
            <div className="wim-flow-step-head">
              <span className="wim-flow-step-num">{step.label}</span>
              <strong>{step.title}</strong>
            </div>
            <p>{step.caption}</p>
            {index < steps.length - 1 ? (
              <span className="wim-flow-step-arrow" aria-hidden>
                <ArrowRightIcon />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

type MediaSlotProps = {
  kind: "video" | "image";
  label: string;
  caption: string;
  accent?: "green" | "blue";
};

export function MediaSlot({ kind, label, caption, accent = "green" }: MediaSlotProps) {
  return (
    <figure className={`wim-media-slot wim-media-slot-${accent}`} aria-label={label}>
      <div className="wim-media-slot-frame">
        <span className="wim-media-slot-kind">{kind === "video" ? "▶" : "⌖"}</span>
        <strong>{label}</strong>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

type ProviderTagProps = {
  status: "live" | "soon";
  label: string;
};

export function ProviderTag({ status, label }: ProviderTagProps) {
  return (
    <span className={`wim-provider-tag wim-provider-tag-${status}`}>
      <span className="wim-provider-tag-dot" aria-hidden />
      {label}
    </span>
  );
}
