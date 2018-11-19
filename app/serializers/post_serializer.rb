class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :body, :file_url

  def file_url
    return rails_blob_url(object.file)
  end

end
