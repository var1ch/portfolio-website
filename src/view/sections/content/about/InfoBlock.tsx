interface Props {
  title: string;
  info: string[];
}

export default function InfoBlock(props: Props) {
  return (
    <div>
      <h2 className="boldTitle">{props.title}</h2>
      <ul>
        {props.info.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}
