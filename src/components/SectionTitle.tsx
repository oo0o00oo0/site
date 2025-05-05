const SectionTitle = (
  { title, start, content }: {
    title: string;
    start: number;
    content: string;
  },
) => {
  return (
    <div
      className={`col-span-3 col-start-${start} px-1 text-sm flex flex-col`}
    >
      <h1 className="text-sm font-light text-gray-500">
        {title}
      </h1>
      <p className="text-xs font-normal ">
        {content}
      </p>
    </div>
  );
};

export default SectionTitle;
