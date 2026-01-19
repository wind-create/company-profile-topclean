type Props = {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
};

export default function Heading({ level = 1, children }: Props) {
  const Tag = `h${level}` as const;

  const styles = {
    1: "text-4xl md:text-6xl font-bold",
    2: "text-3xl font-semibold",
    3: "text-xl font-semibold",
  };

  return <Tag className={styles[level]}>{children}</Tag>;
}
