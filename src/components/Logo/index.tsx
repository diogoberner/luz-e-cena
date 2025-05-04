import Link from "../Link";

const Logo = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <Link href="/">
      <img {...props} />
    </Link>
  );
};

export default Logo;
