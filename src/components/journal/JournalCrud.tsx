
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Upload, Clipboard, Search } from "lucide-react";
import { toast } from "sonner";
import { JournalEntry } from "@/types/journal";
import { JournalForm } from "./JournalForm";
import { JournalList } from "./JournalList";

export function JournalCrud() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreate = (entryData: Omit<JournalEntry, 'id' | 'createdAt'>) => {
    const newEntry: JournalEntry = {
      ...entryData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
    setIsFormOpen(false);
    toast.success("Journal entry created successfully!");
  };

  const handleUpdate = (entryData: Omit<JournalEntry, 'id' | 'createdAt'>) => {
    if (!editingEntry) return;
    
    const updatedEntry: JournalEntry = {
      ...entryData,
      id: editingEntry.id,
      createdAt: editingEntry.createdAt,
    };
    
    setEntries(entries.map(entry => 
      entry.id === editingEntry.id ? updatedEntry : entry
    ));
    setEditingEntry(null);
    setIsFormOpen(false);
    toast.success("Journal entry updated successfully!");
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
    toast.success("Journal entry deleted successfully!");
  };

  const handleEdit = (entry: JournalEntry) => {
    setEditingEntry(entry);
    setIsFormOpen(true);
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || entry.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Journal Entries</CardTitle>
            <Button 
              onClick={() => {
                setEditingEntry(null);
                setIsFormOpen(true);
              }}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Entry
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Total: {entries.length}</span>
            <span>Showing: {filteredEntries.length}</span>
          </div>
        </CardContent>
      </Card>

      {/* Form Modal */}
      {isFormOpen && (
        <JournalForm
          entry={editingEntry}
          onSubmit={editingEntry ? handleUpdate : handleCreate}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingEntry(null);
          }}
        />
      )}

      {/* Entries List */}
      <JournalList
        entries={filteredEntries}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
