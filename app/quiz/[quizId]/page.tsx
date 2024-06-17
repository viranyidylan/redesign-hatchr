// 'use client'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CodeBlock from "@/components/ui/code-block"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const code = `export default function CodeBlock({ code, language }) {

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return code ? (
        <>
            <pre style={{ fontSize: '0.9rem' }}>
                <code className="class-x-y">{code}</code>
            </pre>
        </>
    ) : null;
};`;

export default async function Quiz() {  

    return (
        <div>
            <Card className="w-[950px]">
                <CardHeader>
                    <CardTitle className="flex w-full justify-between px-2 py-2"><div>Question 1 of 15</div><div>Time remaining: 150s</div></CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            
                            <p>What will be the output of the follow code block?</p>
                            
                            <CodeBlock code={code} language={'jsx'}/>
                            {/* <pre>
                                <code>{code}</code>
                            </pre> */}
                            
                        </div>
                        <div className="flex flex-col space-y-3">
                        <Label htmlFor="framework">Select your answer</Label>
                        <RadioGroup 
                            defaultValue="comfortable"
                            className="flex flex-col space-y-1"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1" id="r1" />
                                <Label htmlFor="r1">Option 1</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2" id="r2" />
                                <Label htmlFor="r2">Option 2</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3" id="r3" />
                                <Label htmlFor="r3">Option 3</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="4" id="r4" />
                                <Label htmlFor="r4">Option 4</Label>
                            </div>
                        </RadioGroup>
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Submit answer</Button>
                </CardFooter>
            </Card>
            
        </div>
    );
}