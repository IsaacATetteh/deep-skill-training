import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const locations = [
  {
    position: { lat: 56.140329460259395, lng: -3.9284515332014083 },
    description: "Airthrey Rd, FK9 5JP",
    name: "Wallace High School",
    city: "Stirling",
  },
  {
    position: { lat: 56.11897131396835, lng: -3.912918855291855 },
    description: "Springkerse, FK7 7UJ",
    name: "Forthbank Performance Centre",
    city: "Stirling",
  },
  {
    position: { lat: 55.94529376098116, lng: -4.00248839884399 },
    description: "Dowanfield Road, G67 1LA",
    name: "Ravenswood Playing Fields",
    city: "Cumbernauld",
  },
  {
    position: { lat: 55.93363615653315, lng: -3.290043525850762 },
    description: "208 Broomhouse Rd, EH12 9AD",
    name: "St Augustines 3G",
    city: "Edinburgh",
  },
];

interface TableDemoProps {
  onLocationClick: (location: (typeof locations)[0]) => void;
}

export function TableDemo({ onLocationClick }: TableDemoProps) {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="1/2">Name</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {locations.map((location) => (
          <TableRow key={location.name} className="fixed-height-row">
            <TableCell>
              <p
                className="underline hover:text-blue-400 cursor-pointer"
                onClick={() => onLocationClick(location)}
              >
                {location.name}
              </p>
            </TableCell>
            <TableCell>{location.city}</TableCell>
            <TableCell>{location.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
