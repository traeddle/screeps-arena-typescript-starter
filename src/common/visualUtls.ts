import { GameObject, Creep, Structure } from "game/prototypes";
import { Visual } from "game/visual";

/** Display the hits remaining */
export function displayHits(obj: Creep | Structure) {
  new Visual().text(
    obj.hits.toString(),
    { x: obj.x, y: obj.y - 0.5 },
    {
      font: "0.5",
      opacity: 0.7,
      backgroundColor: "#808080",
      backgroundPadding: 0.03
    }
  );
}

/** Draw a line from obj1 to obj2 */
export function HealLine(obj1: GameObject, obj2: GameObject) {
  new Visual().line(obj1, obj2, {
    color: "#29ed47",
    opacity: 0.5,
    width: 0.1,
    lineStyle: undefined
  });
}
