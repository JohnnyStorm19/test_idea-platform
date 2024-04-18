import { useContext, useMemo } from "react";

import { AppContext, IContext } from "../../../app/providers";
import { getUniqueStops } from "../lib/getUniqueStops";
import { Checkbox } from "../../../shared/ui";

export const StopsFilter = () => {
  const { isChecked, setIsChecked } = useContext(AppContext) as IContext;

  const uniqueStops = useMemo(() => {
    return getUniqueStops();
  }, []);

  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkbox = e.currentTarget.id;
    if (checkbox === "none" || checkbox === "all") {
      setIsChecked([checkbox]);
    }
    if (checkbox.includes("stop")) {
      setIsChecked((prev) => prev.filter((box) => box.includes("stop")));
    }
    if (e.currentTarget.checked) {
      setIsChecked((prev) => [...prev, checkbox]);
    } else {
      setIsChecked((prev) => prev.filter((box) => box != checkbox));
    }
  };

  return (
    <section className="flex flex-col">
      <h5 className="text-lg text-center font-bold">Количество пересадок</h5>
      <div className="block sm:flex gap-3 lg:block">
        <Checkbox
          className="p-2 hover:transition-colors hover:bg-sky-200 hover:rounded-lg"
          key={"all"}
          onChange={handleChangeCheckBox}
          id={"all"}
          checked={isChecked.includes("all")}
          label="Все"
        />
        {uniqueStops.map((stop) => {
          let id;
          if (stop === 0) {
            id = "none";
            return (
              <Checkbox
                className="p-2 hover:transition-colors hover:bg-sky-200 hover:rounded-lg"
                key={id}
                onChange={handleChangeCheckBox}
                id={id}
                checked={isChecked.includes("none")}
                label="Без пересадок"
              />
            );
          }
          id = `stop_${stop}`;
          return (
            <Checkbox
              className="p-2 hover:transition-colors hover:bg-sky-200 hover:rounded-lg"
              key={id}
              onChange={handleChangeCheckBox}
              id={id}
              checked={isChecked.includes(id)}
              label={String(stop)}
            />
          );
        })}
      </div>
    </section>
  );
};
