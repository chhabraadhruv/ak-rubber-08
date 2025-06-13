
import { sizeLists } from "@/data/size-lists";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function SizeListsPage() {
  const categories = [...new Set(sizeLists.map(list => list.category))];

  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pt-20 md:pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Product Size Lists</h1>
          <p className="text-lg text-muted-foreground">
            Browse comprehensive size specifications for all our products.
          </p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sizeLists
                .filter(list => list.category === category)
                .map(list => (
                  <Card key={list.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {list.productName} {list.productCode}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {list.description || `Size specifications for ${list.productName}`}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {list.data.length} sizes available
                      </p>
                      <Link 
                        to={`/size-lists/${list.slug}`}
                        className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                      >
                        View Size List
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
