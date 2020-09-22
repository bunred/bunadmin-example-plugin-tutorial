import React, { createRef } from "react"
import {
  Table,
  TableHead,
  TableDefaultProps,
  tableIcons
} from "@bunred/bunadmin"
import { useTheme } from "@material-ui/core/styles"
import { SchemaLabel, SchemaColumns } from "./plugin"
export default function() {
  const theme = useTheme()
  const tableRef = createRef()
  return (
    <>
      <TableHead title={SchemaLabel} />
      <Table
        tableRef={tableRef}
        title={SchemaLabel}
        columns={SchemaColumns()}
        style={TableDefaultProps.style}
        icons={tableIcons({ theme })}
        options={{
          ...TableDefaultProps.options,
          filtering: true
        }}
        data={[
          {
            id: 1,
            title: "post 1",
            body: "body 1"
          },
          {
            id: 2,
            title: "post 2",
            body: "body 2"
          }
        ]}
      />
    </>
  )
}
