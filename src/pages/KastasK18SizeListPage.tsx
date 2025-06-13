
import { kastasK18SizeList } from "@/data/size-lists/kastas-compact-seal-k18";
import SizeListTable from "@/components/SizeListTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KastasK18SizeListPage() {
  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Size List for KASTAS Compact Seal K-18
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Complete size specifications for KASTAS Compact Seal K-18 series hydraulic seals.
            These seals are designed for high-performance hydraulic applications.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {kastasK18SizeList.productName} ({kastasK18SizeList.productCode})
            </CardTitle>
            <p className="text-muted-foreground">
              Category: {kastasK18SizeList.category}
            </p>
          </CardHeader>
          <CardContent>
            <SizeListTable 
              data={kastasK18SizeList.data}
              title="Available Sizes"
            />
            
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">Technical Notes:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• OD = Outer Diameter</li>
                <li>• ID = Inner Diameter</li>
                <li>• All measurements are in millimeters (mm)</li>
                <li>• Contact us for custom sizes or specific requirements</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
