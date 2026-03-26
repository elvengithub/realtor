import { Mail, Phone, Calendar, MessageSquare } from "lucide-react";

export default function InquiriesPage() {
  // This will eventually fetch from Supabase
  const inquiries = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "(555) 123-4567", message: "I'm interested in the Beachfront Villa. Is it still available for a tour this weekend?", property: "Modern Beachfront Villa", date: "2 hours ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "(555) 987-6543", message: "What are the HOA fees for the Luxury Penthouse?", property: "Luxury Penthouse", date: "5 hours ago" },
    { id: 3, name: "Robert Wilson", email: "robert@example.com", phone: "(555) 456-7890", message: "Can you send more photos of the kitchen in the Mountain Cabin?", property: "Rustic Mountain Cabin", date: "1 day ago" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Inquiries</h1>
        <p className="text-slate-500 mt-2">Manage and respond to property inquiries from potential buyers.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Message</th>
                <th className="px-6 py-4 font-semibold">Property</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900">{inquiry.name}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Mail className="w-3 h-3" />
                        <span>{inquiry.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Phone className="w-3 h-3" />
                        <span>{inquiry.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 text-slate-600">
                      <MessageSquare className="w-5 h-5 mt-1 flex-shrink-0 text-slate-400" />
                      <p className="line-clamp-2 text-sm">{inquiry.message}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {inquiry.property}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>{inquiry.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View Full</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
