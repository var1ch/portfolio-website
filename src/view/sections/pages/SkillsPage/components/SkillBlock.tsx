interface Props {
  title: string;
  description: string;
  iconName?: "typescript" | "react" | "redux";
}

export default function SkillBlock(props: Props) {
  return (
    <>
      <h2 className="boldTitle">{props.title}</h2>
      <p>{props.description}</p>
    </>
  );
}
