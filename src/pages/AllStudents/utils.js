import { Link } from "react-router-dom";
import { CustomButton } from "../../components/shared/CustomButton";

export const studentColumns = [
  {
    title: "Enrollment No",
    dataIndex: "enrollmentNo",
    key: "enrollmentNo",
    render: function (no) {
      return (
        <div className="lg:text-lg 2xl:text-xl text-table font-light">{no}</div>
      );
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: function (name) {
      return (
        <div className="lg:text-lg 2xl:text-xl text-table font-light">
          {name}
        </div>
      );
    },
  },
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
    render: function (text) {
      return (
        <>
          {text && (
            <div className="lg:text-lg 2xl:text-xl text-table px-8 font-light">
              {text}
            </div>
          )}
        </>
      );
    },
  },
  {
    title: "",
    dataIndex: "View",
    key: "id",
    render: function (text) {
      return (
        <>
          {text && (
            <Link to="/profile">
              <CustomButton className="lg:text-lg 2xl:text-xl bg-green-600 focus:bg-green-500 hover:bg-green-500">
                View
              </CustomButton>
            </Link>
          )}
        </>
      );
    },
  },
];

export const studentData = [
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
  {
    name: "Anvi Jain",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "1",
  },
  {
    name: "Monty",
    class: "E",
    enrollmentNo: "19100BTCMCI05515",
    id: "2",
  },
];
