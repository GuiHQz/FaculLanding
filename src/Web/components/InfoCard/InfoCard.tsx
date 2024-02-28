import * as Styles from "./styles";

interface InfoCardProps {
  /**
   * Description of the component
   */
  text: string;
  /**
   * Title of the component
   */
  title: string;
  /**
   * Image from the component
   */
  image: string;
  /**
   * The purpose of this property is to determine which side the image will be on.
   */
  imageRight?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  text,
  title,
  image,
  imageRight,
}) => {
  return (
    <Styles.MainContainer>
      {!imageRight ? (
        <Styles.RightText>
          <Styles.Image src={image} />
          <Styles.TextContent>
            <span>
              <h2>{title}</h2>
              <pre>{text}</pre>
            </span>
          </Styles.TextContent>
        </Styles.RightText>
      ) : (
        <Styles.LeftText>
          <Styles.TextContent>
            <span>
              <h2>{title}</h2>
              <pre>{text}</pre>
            </span>
          </Styles.TextContent>
          <Styles.Image src={image} />
        </Styles.LeftText>
      )}
    </Styles.MainContainer>
  );
};
