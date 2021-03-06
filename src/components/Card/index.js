import ContainerBlock from "../Container/Block.styles";
import { constants, themes, spacing } from "../../theme";
import { cardBoxShadow } from "../../theme/constants";

const Card = ContainerBlock.extend`
  border-radius: ${constants.borderRadius.large};
  background-color: ${themes.global.white.base};
  box-shadow: ${cardBoxShadow};
  padding: ${spacing.moderate};
  border: none;
`;

Card.displayName = "Card";

export default Card;
