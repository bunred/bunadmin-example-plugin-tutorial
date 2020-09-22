import { IPluginData } from "@bunred/bunadmin"
const plugin = "mypost"
const commonProps = {
  team: "myteam",
  group: "blog",
  customized: true,
  icon_type: "eva"
}
const data: IPluginData[] = [
  {
    ...commonProps,
    id: "blog_post",
    name: "post",
    label: "Post",
    icon: "file-text-outline"
  }
]
export default { plugin, data }
