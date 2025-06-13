
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SizeListItem } from "@/types/sizeList";

interface SizeListTableProps {
  data: SizeListItem[];
  title?: string;
}

export default function SizeListTable({ data, title }: SizeListTableProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      )}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Profile</TableHead>
              <TableHead>OD (mm)</TableHead>
              <TableHead>ID (mm)</TableHead>
              <TableHead>Thickness</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.profile}</TableCell>
                <TableCell>{item.od}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.thickness}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
