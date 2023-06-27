import React, {  useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineChevronDown } from "react-icons/hi2";

function FilterEvents({
  initialList,
  setFilteredEventList,
  filterMode,
  filterRecents,
  filterNextWeek,
}) {
  const { t } = useTranslation("global");

  const [openFilters, setOpenFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSelected, setFilterSelected] = useState(t("events.recently"));

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value?.toLowerCase());
    setFilteredEventList(filteredEvents);
  };

  const filteredEvents = initialList?.filter((event) => {
    const title = event?.title?.toLowerCase();
    const description = event?.shortDescription?.toLowerCase();
    return title?.includes(searchTerm) || description?.includes(searchTerm);
  });

  const ItemList = ({ option }) => {
    return (
      <li
        className="flex  hover:text-primary cursor-pointer"
        onClick={() => {
          setOpenFilters(false);
          setFilterSelected(option.traducedText);
          filterFunction(option.filterBy);
        }}
      >
        {option.traducedText}
      </li>
    );
  };

  const optionsFilterDic = {
    ONLINE: "online",
    PRESENTIAL: "presential",
    RECENTS: "recents",
  };

  const filterFunction = (optionFilter) => {
    switch (optionFilter) {
      case optionsFilterDic.ONLINE:
        filterModeIsPresential(false);
        break;
      case optionsFilterDic.PRESENTIAL:
        filterModeIsPresential(true);
        break;
      default:
        console.log("no valid filter");
        break;
    }
  };

  const filterModeIsPresential = (isPresential) => {
    const cloneEventList = initialList?.filter(
      (event) => event.isPresential === isPresential
    );
    setFilteredEventList(cloneEventList);
  };

  const arrOptionsFilters = [
    { traducedText: t("events.online"), filterBy: optionsFilterDic.ONLINE },
    {
      traducedText: t("events.presential"),
      filterBy: optionsFilterDic.PRESENTIAL,
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 z-20">
      <input
        data-aos="fade-right"
        data-aos-duration="1300"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={t("events.searchEvent") + "..."}
        className="input rounded-full shadow-custom w-full md:w-2/3"
      />
      <div
        data-aos="fade-left"
        data-aos-duration="1300"
        className="w-full py-3 md:w-1/3 shadow-custom flex justify-center items-center rounded-full backdrop-filter relative backdrop-blur-md bg-white bg-opacity-60 hover:bg-white "
      >
        <span
          className=" w-full font-roboto h-full flex justify-center items-center cursor-pointer text-primary select-none  "
          onClick={() => setOpenFilters(!openFilters)}
        >
          <strong className="text-text-color font-mulish pr-2">
            {t("events.filterBy")}:
          </strong>
          {filterSelected && filterSelected}
          <HiOutlineChevronDown
            className={
              openFilters
                ? "transition-all h-full"
                : "transition-all h-full rotate-180"
            }
          />
        </span>

        <ul
          tabIndex={0}
          className={
            openFilters
              ? "shadow-custom rounded-2xl p-4 absolute w-full top-0 mt-16 bg-white transition-all z-40"
              : "hidden"
          }
        >
          {arrOptionsFilters &&
            arrOptionsFilters?.map((option, index) => {
              return <ItemList key={index} option={option} />;
            })}
        </ul>
      </div>
    </div>
  );
}

export default FilterEvents;
