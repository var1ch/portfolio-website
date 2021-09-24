interface Props {
  title: string;
  info: string[];
  className: string;
}

export default function InfoBlock(props: Props) {
  return (
    <div className={`info_block ${props.className}`}>
      <h2 className="boldTitle">{props.title}</h2>
      <ul>
        {props.info.map((info) => (
          <li>{info}</li>
        ))}
      </ul>
    </div>
  );
}
