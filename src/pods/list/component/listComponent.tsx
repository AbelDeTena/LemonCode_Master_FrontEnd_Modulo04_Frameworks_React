import { Navbar } from "./navbar";
import { List } from "./list";
import { ListProps } from "./model";

export function ListComponent({
  organization,
  setOrganization,
  data,
  loading,
  error,
  setError,
}: ListProps) {
  return (
    <>
      <Navbar organization={organization} setOrganization={setOrganization} />
      <List data={data} loading={loading} error={error} setError={setError} />
    </>
  );
}
