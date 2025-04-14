
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface EditableContentProps {
  initialContent: string;
  contentType: 'text' | 'title' | 'paragraph' | 'list';
  id: string;
  className?: string;
}

const EditableContent: React.FC<EditableContentProps> = ({ 
  initialContent, 
  contentType, 
  id, 
  className = "" 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [temporaryContent, setTemporaryContent] = useState(initialContent);
  const { toast } = useToast();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setTemporaryContent(content);
  };

  const handleSave = () => {
    setContent(temporaryContent);
    setIsEditing(false);
    // In a real app, you might want to save this to a database
    localStorage.setItem(`resume_content_${id}`, temporaryContent);
    toast({
      title: "Content updated",
      description: "Your changes have been saved successfully.",
    });
  };

  // Load content from localStorage if available
  React.useEffect(() => {
    const savedContent = localStorage.getItem(`resume_content_${id}`);
    if (savedContent) {
      setContent(savedContent);
      setTemporaryContent(savedContent);
    }
  }, [id]);

  const renderContent = () => {
    if (isEditing) {
      return (
        <div className="w-full">
          <Textarea
            value={temporaryContent}
            onChange={(e) => setTemporaryContent(e.target.value)}
            className="w-full min-h-[100px]"
            placeholder="Enter your content..."
          />
          <div className="flex justify-end mt-2 space-x-2">
            <Button variant="outline" onClick={handleEditToggle}>Cancel</Button>
            <Button onClick={handleSave}>
              <Check className="mr-2 h-4 w-4" /> Save
            </Button>
          </div>
        </div>
      );
    }

    switch (contentType) {
      case 'title':
        return <h2 className={className}>{content}</h2>;
      case 'paragraph':
        return <p className={className}>{content}</p>;
      case 'list':
        // Simple handling for lists - assuming content items are separated by new lines
        return (
          <ul className={className}>
            {content.split('\n').filter(item => item.trim()).map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        );
      default:
        return <div className={className}>{content}</div>;
    }
  };

  return (
    <div className="editable-content">
      {renderContent()}
      {!isEditing && (
        <Button
          variant="ghost"
          size="sm"
          className="edit-button"
          onClick={handleEditToggle}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default EditableContent;
