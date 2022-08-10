import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import TemplateRow from "./TemplateRow";

const TemplateList = () => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Template Name</th>
          <th>Date Created</th>
          <th>Last Modified</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TemplateRow />
        <TemplateRow />
        <TemplateRow />
      </tbody>
    </Table>
  );
};

export default TemplateList;
