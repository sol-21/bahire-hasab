const BC: number = 5500;
type Props = number;

export const ameteAlem = (props: Props) => {
  const ameteAlem = BC + props;
  console.log(ameteAlem);
  return ameteAlem;
};
