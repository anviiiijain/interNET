export const ProfileData = {
  first_name: "Kakashi",
  last_name: "Hatake",
  address: "Hidden Leaf Village, Japan, Asia",
  contactNoPrimary: "+91 9xxxxxxxxx",
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
    render: (value) => value.stream,
  },
  {
    key: "section",
    render: (value) => value.section,
  },
  {
    key: "company",
    render: (value) => value.company,
  },
  {
    key: "position",
    render: (value) => value.position,
  },
  {
    key: "mentor",
    render: (value) => value.mentor,
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
