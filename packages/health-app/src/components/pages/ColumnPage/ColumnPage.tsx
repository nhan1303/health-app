import { ColumnCardList, RecommendCardList } from "components";
import { columnActions } from "modules/domains/column/columnSlice";
import { useGetColumnList } from "modules/domains/column/hooks/useGetColumnList";
import { useGetRecommendList } from "modules/domains/column/hooks/useGetRecommendList";
import {
  selectColumnData,
  selectColumnFilters,
} from "modules/domains/column/selectors";

import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack } from "ui-components";

export interface IColumnPageProps {}

export const ColumnPage: React.FC<IColumnPageProps> = () => {
  const dispatch = useDispatch();
  const { data: recommendListData } = useGetRecommendList();

  const columnFilters = useSelector(selectColumnFilters);
  useGetColumnList(columnFilters);
  const columnData = useSelector(selectColumnData);

  const handleLoadMoreFood = () => {
    dispatch(
      columnActions.setFilters({
        ...columnFilters,
        page: columnFilters.page + 1,
      })
    );
  };

  const ColumnCardListSx = {
    width: "960px",
    margin: "0 auto",
    marginBottom: "64px",
  };

  return (
    <Box>
      <Stack marginTop="56px" marginBottom="56px">
        <RecommendCardList data={recommendListData} />
      </Stack>

      <ColumnCardList onMoreClick={handleLoadMoreFood} sx={ColumnCardListSx} data={columnData || []} />
    </Box>
  );
};
