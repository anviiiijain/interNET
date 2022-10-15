export const ProfileData = {
  name: "Kakashi Hatake",
  address: "Hidden Leaf Village, Japan, Asia",
  contact: "+91 9xxxxxxxxx",
  stream: "Chidori Stream",
  section: "Elite",
  company: "Konoha",
  position: "Hokage",
  mentor: "Minato Uzumaki",
};

export const InternshipData = {
  name: "Kakashi Hatake",
  address: "Hidden Leaf Village, Japan, Asia",
  contact: "+91 9xxxxxxxxx",
  stream: "Chidori Stream",
  section: "Elite",
  company: "Konoha",
  position: "Hokage",
  mentor: "Minato Uzumaki",
};

export const ProfileDetailColumns = [
  {
    key: "name",
    render: (value) => `${value.first_name} ${value.last_name}`,
  },
  {
    key: "address",
    render: (value) => value.address,
  },
  {
    key: "contact",
    render: (value) => value.contactNoPrimary,
  },
  {
    key: "stream",
    render: (value) => "stream",
  },
  {
    key: "section",
    render: (value) => "section",
  },
  {
    key: "company",
    render: (value) => "company",
  },
  {
    key: "position",
    render: (value) => "position",
  },
  {
    key: "mentor",
    render: (value) => "mentor",
  },
];

export const InternshipDetailsColumns = [
  {
    key: "name",
    render: (data) => data.name,
  },
  {
    key: "address",
    render: (data) => data.address,
  },
  {
    key: "contact",
    render: (data) => data.contact,
  },
  {
    key: "stream",
    render: (data) => data.stream,
  },
  {
    key: "section",
    render: (data) => data.section,
  },
  {
    key: "company",
    render: (data) => data.company,
  },
  {
    key: "position",
    render: (data) => data.position,
  },
  {
    key: "mentor",
    render: (data) => data.mentor,
  },
];
