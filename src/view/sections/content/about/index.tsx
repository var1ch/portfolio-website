import { StyledDiv } from "./styles";

export default function About() {
  return (
    <StyledDiv>
      <h1 className="boldTitle">
        Hello, my name is Vitalii Variichuk and I want to become React Developer
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore et
        laudantium ullam impedit dolorum quia praesentium amet saepe id soluta,
        corporis est sit deserunt reiciendis repellat esse nemo aperiam.
      </p>
      <h2 className="boldTitle">Education:</h2>
      <ul>
        <li>Lesya Ukrainka Volyn National University (2014 - 2020)</li>
        <li>Department of Psychology and Sociology</li>
        <li>Masters degree of Sociology (with honours)</li>
      </ul>
      <h2 className="boldTitle">Soft skills:</h2>
      <ul>
        <li>Problem solving</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <h2 className="boldTitle">Languages:</h2>
      <ul>
        <li>English (A2 - B1)</li>
        <li>Ukrainian (native)</li>
        <li>Russian</li>
      </ul>
      <h2 className="boldTitle">Hardware:</h2>
      <ul>
        <li>CPU: AMD Ryzen 5 3400g</li>
        <li>Video: Radeon™ RX Vega 11 Graphics (2 Gb)</li>
        <li>RAM: 16 Gb</li>
        <li>SSD: Kingston A400</li>
        <li>Microphone: HyperX QuadCast</li>
      </ul>
    </StyledDiv>
  );
}
