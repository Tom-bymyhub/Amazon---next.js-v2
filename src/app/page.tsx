import { Metadata } from 'next';
import Index from '@/components/Index';

export const metadata: Metadata = {
  title: "Amazon Interview Coach",
  description: "Prepare for Amazon interviews with a former Amazon manager.",
};

export default function IndexPage() {
  return <Index />;
}
