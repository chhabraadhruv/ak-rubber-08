
import { useParams } from "react-router-dom";
import { getSizeListBySlug } from "@/data/size-lists";
import SizeListTable from "@/components/SizeListTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NotFound from "./NotFound";

export default function SizeListDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }

  const sizeList = getSizeListBySlug(slug);

  if (!sizeList) {
    return <NotFound />;
  }

  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Size List for {sizeList.productName} {sizeList.productCode}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {sizeList.description || `Complete size specifications for ${sizeList.productName}.`}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {sizeList.productName} ({sizeList.productCode})
            </CardTitle>
            <p className="text-muted-foreground">
              Category: {sizeList.category}
            </p>
          </CardHeader>
          <CardContent>
            <SizeListTable 
              data={sizeList.data}
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
