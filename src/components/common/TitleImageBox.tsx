interface TitleImageBoxProps {
  src: string;
  title: string;
}

export function TitleImageBox(props: TitleImageBoxProps) {
  const { src, title } = props;

  return (
    <div
      class="relative h-64 mb-8 rounded-lg overflow-hidden"
      style={`background-image: url(${src}); background-size: contain; background-position: center; background-repeat: no-repeat; background-color: rgba(0, 0, 0, 0.05);`}
    >
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      <h1 class="absolute bottom-4 left-4 text-2xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
}
