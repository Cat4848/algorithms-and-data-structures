export function countdown(n: number) {
  if (n <= 0) return;
  countdown(n - 1);
}
countdown(4);

interface Categories {
  id: string;
  parent: string;
}

const categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "cats", parent: "mammals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" }
];

export function makeTree(categories: Categories[], parent: string) {
  let tree: { [key: string]: string | null } = {};
  const filteredCategories = categories.filter((c) => c.parent === parent);
  filteredCategories.forEach((c) => {
    // @ts-ignore
    tree[c.id] = makeTree(categories, c.id);
  });
  return tree;
}
// @ts-ignore
const tree = makeTree(categories, null);
