import Badge from "../ui/Badge";

function ArcCard() {
  return (
    <article className="bg-surface border-border flex flex-col gap-4 rounded-xl border p-6">
      <div className="flex flex-col gap-1">
        <div className="flex shrink-0 items-start justify-between gap-4">
          <h2 className="text-heading-arc text-fg">
            Arc 1 · The Tumultuous First Day
          </h2>
          <Badge variant="default">Anime</Badge>
        </div>
        <p className="text-small-regular text-fg-muted">
          Anime S1 Ep. 1-3 · LN vol. 1
        </p>
      </div>
      <p className="text-body text-fg-muted max-w-180">
        Subaru is pulled into another world with nothing but his phone. After
        helping a silver-haired girl search for her stolen insignia, he is
        killed, and wakes up exactly where he started.
      </p>
    </article>
  );
}

export default ArcCard;
