import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const quizzes = [
    {
        id: 1,
        name: 'General Software Engineering',
        description: 'Tests various general skills in the field of software engineering, especially web technologies.',
        status: 'available'
    },
    {
        id: 2,
        name: 'JavaScript',
        description: 'A really very very long super duper long JavaScript description. Kind of QA vibes to test if this is a really bad problem or how the UI handles long QA-style descriptions with tonnes of text. duper long JavaScript description. Kind of QA vibes to test if this is a really bad problem or how the UI handles long QA-style descriptions with tonnes of text.',
        status: 'available'
    },
    {
        id: 3,
        name: 'Python',
        description: 'Python things',
        status: 'available'
    },
]
  
export default async function AssessmentsPage() {  

    return (
        <>
            <h1 className="mt-8 py-4 text-center text-2xl font-bold leading-tight text-white">          
                Select an assessment to get started
            </h1>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="w-[250px]">Tech</TableHead>
                    <TableHead >Description</TableHead>
                    {/* <TableHead>Method</TableHead> */}
                    <TableHead>Status</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                    {quizzes.map((quiz) => (
                        <TableRow key={quiz.id}>
                            <TableCell className="font-medium">{quiz.name}</TableCell>
                            <TableCell>{quiz.description}</TableCell>
                            <TableCell >{quiz.status}</TableCell>
                            <TableCell>
                                <Link href="quiz/1" className={buttonVariants({ variant: "outline" })}>Get started</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}