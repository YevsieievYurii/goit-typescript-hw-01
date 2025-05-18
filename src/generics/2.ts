type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  TTop extends Pick<AllType, "name" | "color">,
  TBottom extends Pick<AllType, "position" | "weight">
>(top: TTop, bottom: TBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top = { name: "Box", color: "Red" };
const bottom = { position: 1, weight: 10 };

const result = compare(top, bottom);

console.log(result);
