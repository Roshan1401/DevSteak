interface Props {}

function Leaderboard(props: Props) {
  const {} = props;

  return (
    <div className=" p-5 h-full">
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center rounded-2xl bg-(--color-bg-secondary) justify-center gap-4 px-4 py-3 border border-(--color-border)">
          <span className="text-(--color-text-primary)">Past 24 Hours</span>
          <span className="text-(--color-text-secondary)">Past 24 Hours</span>
          <span className="text-(--color-text-secondary)">Past 24 Hours</span>
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default Leaderboard;
