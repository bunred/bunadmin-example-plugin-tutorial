import { Column } from "material-table"
import Type from "./types"
export default (): Column<Type>[] => [
  {
    title: "ID",
    field: "id",
    type: "numeric",
    width: 100,
    defaultSort: "desc"
  },
  {
    title: "Title",
    field: "title"
  },
  {
    title: "Body",
    field: "body"
  }
]
